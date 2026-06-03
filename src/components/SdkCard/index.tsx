import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface Props {
  href: string;
  light: string;
  dark: string;
  label: string;
}

export default function SdkCard({ href, light, dark, label }: Props) {
  const lightSrc = useBaseUrl(light);
  const darkSrc = useBaseUrl(dark);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="sdk-card">
      <img src={lightSrc} alt={label} className="sdk-logo sdk-light" />
      <img src={darkSrc} alt={label} className="sdk-logo sdk-dark" />
      <span>{label}</span>
    </a>
  );
}
