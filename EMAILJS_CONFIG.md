# Configuração do EmailJS

Para ativar o envio real de e-mails, você precisa configurar o EmailJS. Siga os passos abaixo:

## 1. Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Faça login no dashboard

## 2. Configurar Serviço de E-mail

1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor (Gmail, Outlook, etc.)
4. Configure com suas credenciais
5. Anote o **Service ID** gerado

## 3. Criar Template de E-mail

1. No painel do EmailJS, vá para "Email Templates"
2. Clique em "Create New Template"
3. **IMPORTANTE:** Configure os campos do template:
   - **To Email:** `seti.depro@uffs.edu.br` (FIXO - endereço de destino)
   - **From Email:** `{{cliente_email}}` (dinâmico)
   - **From Name:** `{{cliente_nome}}` (dinâmico)
   - **Subject:** `Nova mensagem do formulário - {{cliente_nome}}`
   - **Reply To:** `{{cliente_email}}` (dinâmico)
   - **Content Type:** Selecione **HTML** (não Text)
4. Configure o template com as seguintes variáveis:
   - `{{cliente_nome}}` - Nome do cliente
   - `{{cliente_email}}` - E-mail do cliente
   - `{{cliente_instituicao}}` - Instituição do cliente
   - `{{mensagem}}` - Mensagem do cliente

5. **CRÍTICO:** No campo "Content", certifique-se de que:
   - O tipo está definido como **HTML** (não Text)
   - Cole o código HTML completo abaixo

 Exemplo de template HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0B8F6C; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .details { background: #e9ecef; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>IA na UFFS</h1>
            <p>Nova mensagem do formulário de contato</p>
        </div>
        
        <div class="content">
            <h2>Nova mensagem recebida</h2>
            
            <div class="details">
                <p><strong>Nome:</strong> {{cliente_nome}}</p>
                <p><strong>E-mail:</strong> {{cliente_email}}</p>
                <p><strong>Instituição:</strong> {{cliente_instituicao}}</p>
            </div>
            
            <div class="details">
                <p><strong>Mensagem:</strong></p>
                <p>{{mensagem}}</p>
            </div>
        </div>
        
        <div class="footer">
            <p>Mensagem enviada automaticamente pelo site IA na UFFS</p>
        </div>
    </div>
</body>
</html>
```

6. Copie o **Template ID** gerado

## Troubleshooting

### Problema: E-mail vai para o endereço errado
- **Solução:** Verifique se o campo "To Email" está configurado como `seti.depro@uffs.edu.br` (fixo), não como `{{cliente_email}}`

### Problema: HTML não renderiza (aparece código HTML)
- **Solução:** No template do EmailJS, certifique-se de que o "Content Type" está definido como **HTML**, não como "Text"

### Problema: Variáveis não funcionam
- **Solução:** Verifique se as variáveis no template correspondem exatamente às enviadas pelo código:
  - `{{cliente_nome}}`
  - `{{cliente_email}}`
  - `{{cliente_instituicao}}`
  - `{{mensagem}}`

### Problema: Erro 405 Not Allowed
- **Causa:** Configuração incorreta do serviço de e-mail no EmailJS
- **Problema Específico Detectado:** O EmailJS está fazendo POST para `https://uffs-seti-depro.github.io/doc_ia_na_uffs/` em vez da API de e-mail
- **Solução URGENTE:**
  1. **Acesse o painel do EmailJS**
  2. **Vá para "Email Services"**
  3. **Edite o serviço `service_j9jwfpv`**
  4. **PROBLEMA:** O serviço está configurado com URL incorreto
  5. **SOLUÇÃO:** Configure com um provedor real:
     - **Gmail:** Selecione "Gmail" e configure com sua conta Google
     - **Outlook:** Selecione "Outlook" e configure com sua conta Microsoft
     - **Outro:** Use um provedor de e-mail válido
  6. **NÃO use URLs customizados** - use apenas provedores pré-configurados
  7. **Salve e teste novamente**

## 4. Obter Public Key

1. Vá em **Account** > **General**
2. Copie a **Public Key**

## 5. Atualizar Configuração

No arquivo `js/contact.js`, atualize as seguintes linhas (linha ~12-16):

```javascript
this.emailjsConfig = {
    serviceId: 'SEU_SERVICE_ID_AQUI',     // Substitua pelo Service ID
    templateId: 'SEU_TEMPLATE_ID_AQUI',   // Substitua pelo Template ID
    publicKey: 'SUA_PUBLIC_KEY_AQUI'      // Substitua pela Public Key
};
```

## 6. Testar

Após configurar, teste o formulário. Os e-mails serão enviados automaticamente para `seti.depro@uffs.edu.br`.

## Fallback

Se o EmailJS falhar, o sistema automaticamente abrirá o cliente de e-mail do usuário como alternativa.

## Limites da Conta Gratuita

- 200 e-mails por mês
- Para mais, considere upgrade para plano pago