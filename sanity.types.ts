/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Orders = {
  _id: string;
  _type: "orders";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  orderNumber?: string;
  stripeCheckoutSessionId?: string;
  stripeCustomerId?: string;
  clerkUserId?: string;
  customerName?: string;
  customerEmail?: string;
  stripePaymentIntentId?: string;
  products?: Array<{
    products?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "products";
    };
    quantity?: number;
    _key: string;
  }>;
  totalPrice?: number;
  status?: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  orderDate?: string;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
};

export type Products = {
  _id: string;
  _type: "products";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  description?: string;
  price?: number;
  category?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  stock?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Orders | Category | Products | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/querys/getCategory.ts
// Variable: ALL_CATEGORY_QUERY
// Query: *[_type == "category"]  | order(_createdAt desc)
export type ALL_CATEGORY_QUERYResult = Array<{
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
}>;

// Source: ./sanity/lib/querys/getCategoryBySlug.ts
// Variable: ALL_CATEGORY_BY_SLUG_QUERY
// Query: *[_type == "products" && references(*[_type == "category" && slug.current == $slug])] | order(_createdAt desc)
export type ALL_CATEGORY_BY_SLUG_QUERYResult = Array<{
  _id: string;
  _type: "products";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  description?: string;
  price?: number;
  category?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  stock?: number;
}>;

// Source: ./sanity/lib/querys/getMyOrders.ts
// Variable: MY_ORDERS_QUERY
// Query: *[_type == "orders" && clerkUserId == $userId] | order(orderDate desc) {        ...,        products[]{        ...,        product ->        }    }
export type MY_ORDERS_QUERYResult = Array<{
  _id: string;
  _type: "orders";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  orderNumber?: string;
  stripeCheckoutSessionId?: string;
  stripeCustomerId?: string;
  clerkUserId?: string;
  customerName?: string;
  customerEmail?: string;
  stripePaymentIntentId?: string;
  products: Array<{
    products?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "products";
    };
    quantity?: number;
    _key: string;
    product: null;
  }> | null;
  totalPrice?: number;
  status?: "cancelled" | "delivered" | "pending" | "processing" | "shipped";
  orderDate?: string;
}>;

// Source: ./sanity/lib/querys/getProductBySlug.ts
// Variable: PRODUCT_BY_SLUG_QUERY
// Query: *[_type == "products" && slug.current == $slug] | order(name asc) [0]
export type PRODUCT_BY_SLUG_QUERYResult = {
  _id: string;
  _type: "products";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  description?: string;
  price?: number;
  category?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  stock?: number;
} | null;

// Source: ./sanity/lib/querys/getallProducts.ts
// Variable: ALL_PRODUCTS_QUERY
// Query: *[_type == "products"]  | order(_createdAt desc)
export type ALL_PRODUCTS_QUERYResult = Array<{
  _id: string;
  _type: "products";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  description?: string;
  price?: number;
  category?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  stock?: number;
}>;

// Source: ./sanity/lib/querys/searchProductByName.ts
// Variable: SEARCH_PRODUCT_QUERY
// Query: *[_type == "products" && name match $searchParam]  | order(_createdAt desc)
export type SEARCH_PRODUCT_QUERYResult = Array<{
  _id: string;
  _type: "products";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  description?: string;
  price?: number;
  category?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  stock?: number;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n    *[_type == \"category\"]  | order(_createdAt desc)\n\n    ": ALL_CATEGORY_QUERYResult;
    "\n        *[_type == \"products\" && references(*[_type == \"category\" && slug.current == $slug])] | order(_createdAt desc)\n    ": ALL_CATEGORY_BY_SLUG_QUERYResult;
    "\n    *[_type == \"orders\" && clerkUserId == $userId] | order(orderDate desc) {\n        ...,\n        products[]{\n        ...,\n        product ->\n        }\n    }\n    ": MY_ORDERS_QUERYResult;
    "\n    *[_type == \"products\" && slug.current == $slug] | order(name asc) [0]\n  ": PRODUCT_BY_SLUG_QUERYResult;
    "\n    *[_type == \"products\"]  | order(_createdAt desc)\n\n    ": ALL_PRODUCTS_QUERYResult;
    "\n        *[_type == \"products\" && name match $searchParam]  | order(_createdAt desc)\n        ": SEARCH_PRODUCT_QUERYResult;
  }
}
