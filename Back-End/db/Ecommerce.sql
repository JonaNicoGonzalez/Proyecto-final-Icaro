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
VALUES ('Pelota de Fútbol Profesional', 'Pelota de fútbol de alta calidad, ideal para competiciones profesionales.', 12500, 'PELOTAS DEPORTIVAS', 'https://i.ibb.co/DzjmLW2/t501475a1-169543049ca9029c8c15665734265008-240-0.jpg');

INSERT INTO productos (nombre, descripcion, precio, categoria, url)
VALUES ('Pelota de Básquet Oficial', 'Pelota de básquet con un gran rebote y durabilidad, perfecta para juego en interiores y exteriores.', 10000, 'PELOTAS DEPORTIVAS', 'https://i.ibb.co/DzjmLW2/t501475a1-169543049ca9029c8c15665734265008-240-0.jpg');

INSERT INTO productos (nombre, descripcion, precio, categoria, url)
VALUES ('Pelota de Tenis Premium', 'Pelotas de tenis con excelente rendimiento para jugadores de todos los niveles.', 3500, 'PELOTAS DEPORTIVAS', 'https://i.ibb.co/DzjmLW2/t501475a1-169543049ca9029c8c15665734265008-240-0.jpg');

INSERT INTO productos (nombre, descripcion, precio, categoria, url)
VALUES ('Pelota de Voleibol de Playa', 'Pelota de voleibol diseñada para resistir condiciones de playa y ofrecer un excelente control.', 8000, 'PELOTAS DEPORTIVAS', 'https://i.ibb.co/DzjmLW2/t501475a1-169543049ca9029c8c15665734265008-240-0.jpg');

INSERT INTO productos (nombre, descripcion, precio, categoria, url)
VALUES ('Pelota de Golf', 'Pelotas de golf de alta precisión, ideales para competencias y prácticas.', 500, 'PELOTAS DEPORTIVAS', 'https://i.ibb.co/DzjmLW2/t501475a1-169543049ca9029c8c15665734265008-240-0.jpg');

INSERT INTO productos (nombre, descripcion, precio, categoria, url)
VALUES ('Pelota de Handball', 'Pelota de handball de tamaño oficial, excelente agarre y durabilidad.', 6000, 'PELOTAS DEPORTIVAS', 'https://i.ibb.co/DzjmLW2/t501475a1-169543049ca9029c8c15665734265008-240-0.jpg');
