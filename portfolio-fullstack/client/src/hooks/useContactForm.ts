import { useState, ChangeEvent, FormEvent } from 'react'
import type { ContactFormData } from '../types'

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

interface UseContactFormReturn {
  formData: ContactFormData
  errors: FormErrors
  isSubmitting: boolean
  successMessage: string
  errorMessage: string
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
  resetForm: () => void
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Limpiar errores al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validate = (): boolean => {
    const tempErrors: FormErrors = {}

    if (!formData.name.trim()) {
      tempErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'El email no es válido'
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'El asunto es requerido'
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'El mensaje es requerido'
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      phone: '',
    })
    setErrors({})
    setSuccessMessage('')
    setErrorMessage('')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccessMessage('¡Mensaje enviado exitosamente! Te contactaré pronto.')
        resetForm()
      } else {
        const data = await response.json()
        throw new Error(data.message || 'Error al enviar el mensaje')
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Error al enviar el mensaje'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    errors,
    isSubmitting,
    successMessage,
    errorMessage,
    handleChange,
    handleSubmit,
    resetForm,
  }
}
