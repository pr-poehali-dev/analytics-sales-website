import json
import os
import psycopg2
from typing import Dict, Any
from pydantic import BaseModel, EmailStr, Field, ValidationError


class LeadRequest(BaseModel):
    '''
    Business: Модель данных для регистрации заявки
    '''
    name: str = Field(..., min_length=2, max_length=255)
    email: EmailStr
    company: str = Field(default='', max_length=255)
    phone: str = Field(default='', max_length=50)
    plan: str = Field(..., pattern='^(starter|professional|enterprise)$')


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Принимает заявки на регистрацию и сохраняет в базу данных
    Args: event - dict с httpMethod, body, headers
          context - объект с request_id, function_name
    Returns: HTTP response dict с результатом сохранения
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    try:
        lead = LeadRequest(**body_data)
    except ValidationError as e:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Validation error', 'details': e.errors()}),
            'isBase64Encoded': False
        }
    
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Database not configured'}),
            'isBase64Encoded': False
        }
    
    conn = psycopg2.connect(database_url)
    cursor = conn.cursor()
    
    cursor.execute(
        "INSERT INTO leads (name, email, company, phone, plan) VALUES (%s, %s, %s, %s, %s) RETURNING id",
        (lead.name, lead.email, lead.company, lead.phone, lead.plan)
    )
    
    lead_id = cursor.fetchone()[0]
    conn.commit()
    cursor.close()
    conn.close()
    
    return {
        'statusCode': 201,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': True,
            'lead_id': lead_id,
            'message': 'Заявка успешно отправлена!'
        }),
        'isBase64Encoded': False
    }
