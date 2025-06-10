import { useEffect } from 'react'

interface CalendlyWidgetProps {
  url: string
  height?: number
  className?: string
}

const CalendlyWidget = ({ url, height = 700, className = '' }: CalendlyWidgetProps) => {
  useEffect(() => {
    // Ensure Calendly script is loaded
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: url,
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      })
    }
  }, [url])

  return (
    <div className={`calendly-widget-container ${className}`}>
      <div 
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: '320px', height: `${height}px`, border: 'none' }}
      />
    </div>
  )
}

export default CalendlyWidget

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Calendly: any
  }
} 