import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.button-link', true>;
    logo: Schema.Attribute.Component<'shared.logo', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_button_links';
  info: {
    description: '';
    displayName: 'Button Link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<['ShoppingCart', 'UserIcon']>;
    label: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['default', 'ghost', 'outline', 'destructive', 'secondary', 'link']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.header': LayoutHeader;
      'shared.button-link': SharedButtonLink;
      'shared.feature': SharedFeature;
      'shared.link': SharedLink;
      'shared.logo': SharedLogo;
    }
  }
}
