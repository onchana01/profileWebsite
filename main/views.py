# main/views.py
from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse

def index(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('comment')

        if not all([name, email, message]):
            return JsonResponse({'success': False, 'message': 'All fields are required!'})

        try:
            send_mail(
                subject=f"Contact Form: {subject}",
                message=f"Name: {name}\nEmail: {email}\nMessage: {message}",
                from_email=email,
                recipient_list=[settings.EMAIL_HOST_USER],
                fail_silently=False,
            )
            return JsonResponse({'success': True, 'message': 'Message sent successfully!'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': f'Error: {str(e)}'})

    return render(request, 'index.html')