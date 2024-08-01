import React from 'react'

export default function ContentPersonalData() {
  return (
    <div className='personal-data'>
        {/* DATOS PRINCIPALES */}
      <div className='data__personal'>
        <h2>Datos personales</h2>
        <ul className=''>
          <li>Juan Pérez</li>
          <li>29 años</li>
          <li>Madrid, España</li>
          <li>juan.perez@example.com</li>
          <li>+34 600 123 456</li>
        </ul>
      </div>
      {/* PERFIL PROFESIONAL */}
      <div className='data__profesional'>
        <h2>Perfil profesional</h2>
        <p>Soy un desarrollador frontend con más de 5 años de experiencia en la creación de interfaces de usuario intuitivas y atractivas. Me apasiona el diseño web y la experiencia del usuario, y siempre busco aprender nuevas tecnologías y mejorar mis habilidades.</p>
      </div>

      {/* Habilidades Técnicas */}
      <div className='data__skills'>
        <h2>Habilidades técnicas</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Angular</li>
          <li>Bootstrap</li>
          <li>Sass</li>
          <li>Git</li>
        </ul>
      </div>


    </div>
  )
}
