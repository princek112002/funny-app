import React from 'react';

const Emploi_du_temps = () => {
  return (
    <div className='MyEmp'>
      <h2 class="title">Emploi du temps<br></br></h2>
      <table class="table table-bordered">
        <thead>
          <tr class="niveau" >
            <th>NIVEAU</th>
            <th>Horaires</th>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Mercredi</th>
            <th>Jeudi</th>
            <th>Vendredi</th>
            <th>Samedi</th>
          </tr>
        </thead>
        <tbody class="table-container">
          <tr>
            <th ><a href='/Emploi_du_temps' class="niveau">Licence 1</a>
            <div><a href='/Emploi_du_temps' class="niveau">* Groupe A</a><br></br></div>
            <div><a href='/Emploi_du_temps' class="niveau">* Groupe B</a></div>
            </th>
            <td></td>
            <td></td>
            <td></td>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          <th ><a href='/Emploi_du_temps' class="niveau">Licence 2</a>
          <div><a href='/' class="niveau">* Groupe A</a><br></br></div>
          <div><a href='/' class="niveau">* Groupe B</a></div>
          </th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          <th><a href='/' class="niveau">Licence 3</a></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          <th ><a href='/' class="niveau">Master 1</a></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          <th ><a href='/' class="niveau">Master 2</a></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          <th></th>
            <td></td>
            <td><a href='/' class="niveau">Semaine 1</a></td>
            <td><a href='/' class="niveau">Semaine 2</a></td>
            <td><a href='/' class="niveau">Semaine 3</a></td>
            <td><a href='/' class="niveau">Semaine 4</a></td>
            <td><a href='/' class="niveau">Semaine 5</a></td>
            <td><a href='/' class="niveau">Semaine 6</a></td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
      <div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
    </div>
  );
};

export default Emploi_du_temps;