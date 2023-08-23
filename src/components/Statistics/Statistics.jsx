import css from 'components/Statistics/Statistics';
import data from 'json.files/data.json';
import PropTypes from 'prop-types';

export const Statistic = ({title, stats }) => {
   return (
     <section className="statistics">
           {data.title !== '' && ( <h2 className="title">Upload stats</h2>)
     }
       <ul className="stat-list">
         {data.map(item => (
          <li  key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
           </li>
         ))}
       </ul>
     </section>
   ); 




};
