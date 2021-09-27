import * as React from 'react';
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { Container, IconButton } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';

import { getMovies } from '../../actions';

export function AutocompleteSearch () {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('')
  const loading = open && options.length === 0;

  const movies = useSelector((state) => state.movies)

  const onChangeInput = (event) => {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    dispatch(getMovies())
    let active = true;

    if (!loading) {
      return undefined;
    }

    (() => {
      if (active) {
        setOptions([...movies]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open, inputValue]);

  return (
    <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: '50%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(event) => setInputValue(event.target.innerText)}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search movie"
          onChange={onChangeInput}
          value={inputValue}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
    <IconButton>
      <Link style={{textDecoration:'none', color: 'red'}} to={`/search/${inputValue}`}>
      <SearchIcon/>
      </Link>
    </IconButton>
    </Container>
  );
}
