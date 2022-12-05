import {useContext} from 'react';

import { NoteContext } from './NoteContext';

export const useNote = () => useContext(NoteContext);