import express from 'express';
import cors from 'cors';
import { fashionData } from "./fashionData.js"
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/company/maria', (req, res) => {
    console.log('Petición obtenida: Obtener Datos de company');
    res.json(fashionData.MariaSucursal);
});

app.get('/api/products/maria', (req, res) => {
    console.log('Petición obtenida: Obtanaer datos de ');
    res.json(fashionData.MariaSucursal.items);
});



app.get('/api/company/jose', (req, res) => {
    console.log('Petición obtenida: Obtener Datos de company');
    res.json(fashionData.JoseSucursal);
});

app.get('/api/products/jose', (req, res) => {
    console.log('Petición obtenida: Obtanaer datos de ');
    res.json(fashionData.JoseSucursal.items);
});



app.get('/api/company/mateo', (req, res) => {
    console.log('Petición obtenida: Obtener Datos de company');
    res.json(fashionData.MateoSucursal);
});

app.get('/api/products/mateo', (req, res) => {
    console.log('Petición obtenida: Obtanaer datos de ');
    res.json(fashionData.MateoSucursal.items);
});



app.get('/api/company/kevin', (req, res) => {
    console.log('Petición obtenida: Obtener Datos de company');
    res.json(fashionData.KevinSucursal);
});

app.get('/api/products/kevin', (req, res) => {
    console.log('Petición obtenida: Obtanaer datos de ');
    res.json(fashionData.KevinSucursal.items);
});



app.get('/api/company/sofia', (req, res) => {
    console.log('Petición obtenida: Obtener Datos de company');
    res.json(fashionData.SofiaSucursal);
});

app.get('/api/products/sofia', (req, res) => {
    console.log('Petición obtenida: Obtanaer datos de ');
    res.json(fashionData.SofiaSucursal.items);
});

app.use((req, res) => {
    console.log('Petición obtenida: Ruta no encontrada:', req.url);
    res.json({
        message: 'API de Invoice',
        description: 'Backend para servir datos de company e invoice Angular',
        availableEndpoints: [
            'GET /api/company/maria',
            'GET /api/products/maria',
            'GET /api/company/jose',
            'GET /api/products/jose',
            'GET /api/company/mateo',
            'GET /api/products/mateo',
            'GET /api/company/kevin',
            'GET /api/products/kevin',
            'GET /api/company/sofia',
            'GET /api/products/sofia',
        ]
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('👌 Servidor Backend iniciado');
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});