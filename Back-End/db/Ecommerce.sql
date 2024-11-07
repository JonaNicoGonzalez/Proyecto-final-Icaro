CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(50),
    descripcion TEXT,
    precio DECIMAL(10,2),
    categoria VARCHAR(50),
    url VARCHAR(250),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT NOT NULL,
    isAdmin BOOLEAN,
    firstName VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(100),
    address VARCHAR(100),
    password VARCHAR(100),
    telephone VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Orders (
    id INT AUTO_INCREMENT NOT NULL,
    user_id INT,
    total_price DECIMAL(10 , 2 ),
    shipping_type VARCHAR(255),
    shipping_address VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
        REFERENCES usuarios (id)
);

CREATE TABLE IF NOT EXISTS OrderDetails (
    id INT AUTO_INCREMENT NOT NULL,
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10 , 2 ),
    PRIMARY KEY (id),
    FOREIGN KEY (order_id)
        REFERENCES Orders (id),
    FOREIGN KEY (product_id)
        REFERENCES productos (id)
);

-- Insertar datos
INSERT INTO usuarios (isAdmin, firstName, lastname, email, address, password, telephone)
VALUES (1, 'Oscar', 'Marmeli', 'oscarmarmeli@gmail.com', 'El Mensú 56 - Villa Libertad', '12345', '3754659457');

INSERT INTO productos (nombre, descripcion, precio, categoria, url)
VALUES ('PARRILLA PARANÁ', 'Una parrilla tradicional...', 65400, 'PARRILLAS MEDIANAS', 'https://productosnuke.com.ar/wp-content/uploads/2021/04/Parillaparana-nueva.png');

INSERT INTO productos (nombre, descripcion, precio, categoria, url)
VALUES ('PARRILLA DELTA', 'Una parrilla tradicional...', 52800, 'PARRILLAS MEDIANAS', 'https://productosnuke.com.ar/wp-content/uploads/2022/09/deltaMesa-de-trabajo-1.png');

INSERT INTO productos (nombre, descripcion, precio, categoria, url)
VALUES ('PARRILLA PUMA', 'Una parrilla tradicional...', 69999, 'PARRILLAS MEDIANAS', 'https://productosnuke.com.ar/wp-content/uploads/2022/09/Mesa-de-trabajo-1.png');

INSERT INTO productos (nombre, descripcion, precio, categoria, url)
VALUES ('HORNO 60 CON CARRO', 'Horno a leña...', 72900, 'HORNOS MEDIANOS', 'https://productosnuke.com.ar/wp-content/uploads/2022/03/Horno-60-con-Carro.png');

INSERT INTO productos (nombre, descripcion, precio, categoria, url)
VALUES ('HORNO 90 CON CARRO', 'Horno a leña...', 77700, 'HORNOS MEDIANOS', 'https://productosnuke.com.ar/wp-content/uploads/2022/03/Horno-60-con-Carro-1.png');

INSERT INTO productos (nombre, descripcion, precio, categoria, url)
VALUES ('HORNO 90 DE EMBUTIR', 'Horno a leña...', 61900, 'HORNOS MEDIANOS', 'https://productosnuke.com.ar/wp-content/uploads/2019/06/horno-embutir-90.jpg');
