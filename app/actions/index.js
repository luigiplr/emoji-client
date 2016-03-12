import fetch from 'isomorphic-fetch';

import * as actions from '../constants/ActionTypes';
import * as api from '../constants/Api';

const fetchHeaders = { headers: { 'Content-Type' : 'application/json' } };
