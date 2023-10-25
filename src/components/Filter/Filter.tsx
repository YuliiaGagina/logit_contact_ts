import PropTypes from 'prop-types';
import { Wrapper, Input } from './Filrer.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';
function Filter() {
  const dispatch = useDispatch();
  return (
    <Wrapper>
     
      <Input
        placeholder="Name"
        type="text"
        name="filter"
        onChange={event => dispatch(addFilter(event.target.value))}
      />
    </Wrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func,
};

export default Filter;
