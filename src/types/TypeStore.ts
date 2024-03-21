export type Endpoint = {
  method: "get" | "post" | "patch" | "delete"; // Método HTTP permitido para la ruta
  uri: (params?: any) => string; // Función para construir la URL
};

export type Request = {
  endpoint: Endpoint;
  params?: any;
  body?: any;
};

export type BaseResponse = {
  success: boolean;
  data: any | null;
  message: string;
  errors: any[] | null;
};
