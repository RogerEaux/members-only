INSERT INTO users
(first_name, last_name, username, password, membership, admin)
VALUES
('Admin', 'admin', 'admin@example.com', '$2a$12$pW6ez0Uk.ws2lvC951JFhOz5zSJxzsGgG5bRF23mXzgADU3aU6KVm', true, true);

INSERT INTO users
(first_name, last_name, username, password, membership, admin)
VALUES
('Member', 'member', 'member@example.com', '$2a$12$6GFzkWtPRgXHZ8jtxPSPuuxlqu5Uh9arYqeR.46o6h0d8ZCnKHR.2', true, false);

INSERT INTO users
(first_name, last_name, username, password, membership, admin)
VALUES
('User', 'user', 'user@example.com', '$2a$12$aFrV74BSjPm2ejMNvcSzhuOvoAAT6wxlJZ.hZAmiLsu64J66TO.hK', false, false);