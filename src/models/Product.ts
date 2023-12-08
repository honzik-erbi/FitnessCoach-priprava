export const getProducts = async () => {
    const res = await fetch(`http://localhost:3000/products`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const getProductById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const createProduct = async () => {
    const res = await fetch(`http://localhost:3000/products`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const updateProduct = async (id: string) => {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};

export const deleteProduct = async (id: string) => {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
    });
};





export type ProductPayload = {
    msg?: string;
    data: ProductType;
    status: number;
  };

  export type ProductsPayload = {
    msg?: string;
    data: ProductType[];
    status: number;
  };
  
  export type ProductType = {
    _id: string;
    username: string;
    phone: number;
    password: string;
  };
  