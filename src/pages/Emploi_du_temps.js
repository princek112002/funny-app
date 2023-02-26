import React from 'react';

const Emploi_du_temps = () => {
  return (
    <div className='MyEmp'>
      <h2>Emploi du temps</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
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
        <tbody>
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
          <th></th>
          <th></th>
            <td></td>
            <td></td>
            <td></td>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Emploi_du_temps;