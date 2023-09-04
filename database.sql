create database suporteChamado;

use suporteChamado;

create table chamados(
    IdNumberChamado varchar (20) primary key not null,
    PersonName varchar (30) not null,
    DateOpen char (8) not null,
    Adress varchar (50) not null,
    Descricao varchar (20),

)

create table inventario(
    Item varchar (50) not null,
    DatePlaced varchar (11),
    Adress varchar (50) not null,
    IdNumberInventario varchar (20) primary key not null,

)

