"use client"
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import '../Buscador/buscador.css'
import { Search } from '@/app/peticionesFetch/page';
import MapeoSectionSeries from '../MapeoSectionSeries/MapeoSectionSeries';

const Buscador = (  ) => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
    },
    onSubmit: async function (values)  {
      let peticion =  await Search(values.nombre)
      handleSearch(peticion)
    },
    validateOnChange: false,
  });


  return (
    <div className='buscador'>
      <form onSubmit={formik.handleSubmit}>
        <input 
        className='buscador__input'
          onChange={formik.handleChange}
          name='nombre'
          placeholder='Buscar'
          value={formik.values.nombre}
        />
        <button className='buscador__boton' type='submit'>Buscar</button>
      </form>
    </div>
    )
};

export default Buscador;
