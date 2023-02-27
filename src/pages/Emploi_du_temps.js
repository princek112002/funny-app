import React from 'react';

const Emploi_du_temps = () => {
  return (
    <div className='MyEmp'>
      <h2>Emploi du temps</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>NIVEAU</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <td>Giraud</td>
            <td>Pierre</td>
            <td>28</td>
          </tr>
          <tr>
            <th></th>
            <td>Durand</td>
            <td>Victor</td>
            <td>26</td>
          </tr>
          <tr>
            <th></th>
            <td>Joly</td>
            <td>Julia</td>
            <td>27</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Emploi_du_temps;