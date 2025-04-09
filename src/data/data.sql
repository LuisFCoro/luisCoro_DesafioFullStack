
INSERT INTO Users (name, email, password) VALUES
('Carlos Gómez', 'carlos@ferremax.com', 'clave123'),
('Marta Ruiz', 'marta@herratech.com', 'segura456'),
('Luis Coro', 'luis@almacendelsol.com', 'superclave789');


INSERT INTO Categories (name) VALUES
('Amoladoras'),
('Soldadoras'),
('Taladros'),
('Compresores'),
('Accesorios');


INSERT INTO Products (name, price, description, image, category_id) VALUES
('Amoladora Angular 2200W', 75999.99, 'Amoladora industrial para cortes pesados. Modelo X2200.', 'amoladora.jpg', 1),
('Soldadora Inverter 200A', 115000.00, 'Soldadora liviana, ideal para trabajos profesionales.', 'soldadora.jpg', 2),
('Taladro Percutor 13mm 710W', 48999.50, 'Taladro con función percutor, incluye maletín.', 'taladro.jpg', 3),
('Compresor de Aire 50L 2HP', 139999.00, 'Compresor ideal para herramientas neumáticas.', 'compresor.jpg', 4),
('Disco de Corte 115mm', 1599.00, 'Disco para amoladora. Alta duración.', 'disco_corte.jpg', 5),
('Electrodos 2.5mm x 1kg', 3999.90, 'Electrodos revestidos para soldadura.', 'electrodos.jpg', 5);


INSERT INTO Carts (user_id, total_price) VALUES
(3, 119999.00);


INSERT INTO CartItems (cart_id, product_id, quantity) VALUES
(1, 1, 1), 
(1, 5, 2); 
