import React from 'react'

import siteConfig from '#data/config'

export interface SEOProps {
  title?: string
  description?: string
  [key: string]: any
}

export const SEO = ({ title, description, ...props }: SEOProps) => (
  <div>
    {/* SEO component - replace with actual SEO implementation if needed */}
    <title>{title}</title>
    <meta name="description" content={description} />
  </div>
)
