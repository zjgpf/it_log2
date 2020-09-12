import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechOptions = ({ getTechs, techs })=> {
  useEffect( ()=> {
    getTechs()
  }, []);
  return techs && techs.map(tech => <option key={tech.id} value={tech.firstName+' '+tech.lastName}>{tech.firstName+' '+tech.lastName}</option>);
}

export default connect(
  state => ({techs: state.tech.techs}),
  { getTechs }
)(TechOptions);
