import './Table.scss';
import SimpleRow from '../SimpleRow/SimpleRow';
import { ThemeContext } from '../../Contexts.js';
import { useContext } from 'react';

function TableArea() {
    const theme = useContext(ThemeContext);

    return (
      <div className="tabel-area">
        <div className='table-title'>
            This is the table area. 
            <br/>Theme: {theme}
        </div>

        <SimpleRow title={'item 1'} price={10} />
        <SimpleRow title={'My Phone'} price={20} />
        <SimpleRow title={'My batery'} price={30} />
        <SimpleRow title={'My charger'} price={40} />
      </div>
    );
  }
  
  export default TableArea;