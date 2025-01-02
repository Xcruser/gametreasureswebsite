'use client';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaCheck, FaStar, FaHeart, FaArrowRight } from 'react-icons/fa';

export type FeatureAlignment = 'left' | 'center' | 'right';
export type FeatureIcon = 'check' | 'star' | 'heart' | 'arrow';
export type IconPosition = 'start' | 'spaced' | 'text';

const iconMap: Record<FeatureIcon, IconType> = {
  check: FaCheck,
  star: FaStar,
  heart: FaHeart,
  arrow: FaArrowRight,
};

export interface FeatureListProps {
  title: string;
  features: string[];
  titleClassName?: string;
  containerClassName?: string;
  checkmarkColor?: string;
  withAnimation?: boolean;
  alignment?: FeatureAlignment;
  icon?: FeatureIcon;
  iconSize?: number;
  iconPosition?: IconPosition;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const alignmentClasses: Record<FeatureAlignment, string> = {
  left: 'text-left items-start',
  center: 'text-center items-center md:items-center',
  right: 'text-right items-end',
};

const mobileAlignmentClasses: Record<FeatureAlignment, string> = {
  left: 'items-start text-left',
  center: 'items-start text-left md:items-center md:text-center',
  right: 'items-start text-left md:items-end md:text-right',
};

// Mobile icon positions (always consistent spacing)
const mobileIconPositionClasses: Record<IconPosition, string> = {
  start: 'space-x-3 md:space-x-3',
  spaced: 'space-x-3 md:space-x-6',
  text: 'space-x-2 md:space-x-1.5',
};

// Reverse positions for right alignment
const iconPositionClassesReverse: Record<IconPosition, string> = {
  start: 'md:flex-row-reverse md:space-x-reverse md:space-x-3',
  spaced: 'md:flex-row-reverse md:space-x-reverse md:space-x-6',
  text: 'md:flex-row-reverse md:space-x-reverse md:space-x-1.5',
};

export function FeatureList({
  title,
  features,
  titleClassName = "text-xl md:text-2xl font-semibold mb-4 text-content-primary",
  containerClassName = "bg-primary-800/50 rounded-xl p-4 md:p-6 backdrop-blur-sm",
  checkmarkColor = "bg-accent-green-light",
  withAnimation = true,
  alignment = 'center',
  icon = 'check',
  iconSize = 14,
  iconPosition = 'start',
}: FeatureListProps) {
  const Wrapper = withAnimation ? motion.div : 'div';
  const Title = withAnimation ? motion.h2 : 'h2';
  const List = withAnimation ? motion.ul : 'ul';
  const ListItem = withAnimation ? motion.li : 'li';
  const IconWrapper = withAnimation ? motion.span : 'span';
  
  const Icon = iconMap[icon];
  const alignmentClass = alignmentClasses[alignment];
  const mobileAlignmentClass = mobileAlignmentClasses[alignment];
  
  // Kombiniere mobile und desktop Klassen
  const basePositionClass = mobileIconPositionClasses[iconPosition];
  const reversePositionClass = alignment === 'right' ? iconPositionClassesReverse[iconPosition] : '';
  const iconPositionClass = `flex items-center ${basePositionClass} ${reversePositionClass}`;

  return (
    <Wrapper
      variants={withAnimation ? container : undefined}
      initial={withAnimation ? "hidden" : undefined}
      animate={withAnimation ? "show" : undefined}
      className={`${containerClassName} ${alignmentClass}`}
    >
      <Title 
        variants={withAnimation ? item : undefined}
        className={`${titleClassName} ${alignmentClass}`}
      >
        {title}
      </Title>
      <List className={`space-y-2 md:space-y-3 text-sm md:text-base text-content-secondary ${mobileAlignmentClass}`}>
        {features.map((feature, index) => (
          <ListItem
            key={index}
            variants={withAnimation ? item : undefined}
            className={iconPositionClass}
          >
            <IconWrapper
              variants={withAnimation ? float : undefined}
              animate={withAnimation ? "animate" : undefined}
              className={`inline-flex items-center justify-center w-5 h-5 ${checkmarkColor} text-primary-900 rounded-full flex-shrink-0`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon size={iconSize} />
            </IconWrapper>
            <span className="flex-1 min-w-0">{feature}</span>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
