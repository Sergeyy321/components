import {
  Section,
  Title,
  UlItem,
  ElStats,
} from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';

export const Statistic = ({title, stats }) => {
   return (
     <Section>
       <Title>{title}</Title>
       <UlItem>
         {stats.map(item => (
           <ElStats key={item.id}>
             <span >{item.label}</span>
             <span >{item.percentage}</span>
           </ElStats>
         ))}
       </UlItem>
     </Section>
   ); 




};
Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};