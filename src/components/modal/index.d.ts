import * as React from 'react';
import { BulmaComponent, BulmaComponentWithoutModifiers } from '..';
import { Card } from '../card';

interface ModalProps {
  show?: boolean;
  onClose?: () => void;
  closeOnEsc?: boolean;
  closeOnBlur?: boolean;
  showClose?: boolean;
  domRef?: React.RefObject<HTMLDivElement>;
  document?: Document;
  children: React.ReactNode;
  className?: string;
}

interface ModalCardHeaderProps {
  showClose?: boolean;
  onClose?: () => void;
}

declare const Modal: BulmaComponentWithoutModifiers<ModalProps> & {
  Content: BulmaComponent<{}, 'div'>;
  Card: BulmaComponent<{}, 'div'> & Card;
};

export default Modal;
