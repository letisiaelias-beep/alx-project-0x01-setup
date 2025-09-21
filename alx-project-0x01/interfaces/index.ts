// interfaces/index.ts

// Posts
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}


// Users
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

/**
 * Data shape used by the modal/form. fields are more permissive (optional)
 * because the form may not collect every nested field.
 */
export interface UserData {
  id?: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}

/**
 * IMPORTANT: onSubmit accepts UserData (id optional) — that fixes the
 * "missing id" type error when the modal sends a new user.
 */
export interface UserModalProps {
onSubmit: (post: UserProps) => void;
}