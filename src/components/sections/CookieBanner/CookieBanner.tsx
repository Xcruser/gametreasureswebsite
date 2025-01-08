'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/utils/cn';

interface CookieBannerProps {
  className?: string;
  onAcceptAll?: () => void;
  onAcceptNecessary?: () => void;
  // Anpassbare Texte
  title?: string;
  description?: string;
  acceptAllText?: string;
  acceptNecessaryText?: string;
  // Layout-Optionen
  position?: 'top' | 'bottom';
  maxWidth?: string;
  showContainer?: boolean;
  // Styling-Optionen
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  // Custom Content
  children?: React.ReactNode;
  // Button-Optionen
  buttonSize?: 'small' | 'medium' | 'large';
  buttonClassName?: string;
  reverseButtonOrder?: boolean;
  buttonsFullWidth?: boolean;
}

export function CookieBanner({ 
  className,
  onAcceptAll,
  onAcceptNecessary,
  // Text defaults
  title = 'Wir verwenden Cookies',
  description = 'Wir nutzen Cookies auf unserer Website, um die Benutzererfahrung zu verbessern. Einige davon sind essenziell für den Betrieb der Seite, während andere uns helfen zu verstehen, wie die Seite genutzt wird.',
  acceptAllText = 'Alle akzeptieren',
  acceptNecessaryText = 'Nur Notwendige',
  // Layout defaults
  position = 'bottom',
  maxWidth = '4xl',
  showContainer = true,
  // Styling defaults
  backgroundColor = 'white',
  textColor = 'gray-900',
  borderColor = 'gray-200',
  // Button defaults
  buttonSize = 'medium',
  buttonClassName,
  reverseButtonOrder = false,
  buttonsFullWidth = false,
  // Custom content
  children
}: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleAcceptAll = () => {
    setIsVisible(false);
    onAcceptAll?.();
  };

  const handleAcceptNecessary = () => {
    setIsVisible(false);
    onAcceptNecessary?.();
  };

  if (!isVisible) return null;

  const buttons = [
    <Button 
      key="necessary"
      variant="necessary"
      size={buttonSize}
      onClick={handleAcceptNecessary}
      className={cn(
        buttonsFullWidth && 'w-full',
        buttonClassName
      )}
    >
      {acceptNecessaryText}
    </Button>,
    <Button 
      key="accept"
      variant="accept"
      size={buttonSize}
      onClick={handleAcceptAll}
      className={cn(
        buttonsFullWidth && 'w-full',
        buttonClassName
      )}
    >
      {acceptAllText}
    </Button>
  ];

  if (reverseButtonOrder) {
    buttons.reverse();
  }

  return (
    <div className={cn(
      'fixed left-0 right-0 bg-white shadow-lg',
      position === 'bottom' ? 'bottom-0' : 'top-0',
      `bg-${backgroundColor}`,
      `border-${position === 'bottom' ? 't' : 'b'} border-${borderColor}`,
      'p-4 md:p-6',
      'z-50',
      className
    )}>
      {showContainer ? (
        <div className="container mx-auto">
          <div className={cn('mx-auto', maxWidth && `max-w-${maxWidth}`)}>
            {renderContent()}
          </div>
        </div>
      ) : (
        renderContent()
      )}
    </div>
  );

  function renderContent() {
    return (
      <div className="flex flex-col gap-4">
        {children || (
          <div className="space-y-2">
            <h3 className={cn(
              'text-lg font-semibold',
              `text-${textColor}`
            )}>
              {title}
            </h3>
            <p className={cn(
              'text-gray-600',
              `text-${textColor}/80`
            )}>
              {description}
            </p>
          </div>
        )}
        
        <div className={cn(
          'flex gap-3',
          buttonsFullWidth ? 'flex-col' : 'flex-col sm:flex-row',
          'justify-end'
        )}>
          {buttons}
        </div>
      </div>
    );
  }
}
