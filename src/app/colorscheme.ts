export interface Colorscheme {
  name: string;
  colors: any;
}

export const SCHEMES: Colorscheme[] = [
  {name: 'ClustalW', colors: {
      A: '#2E5DCB', B: '', C: '#2E5DCB', D: '#E817F9', E: '#E817F9', F: '#2E5DCB', G: '#FA9915', H: '#15FADB',
      I: '#2E5DCB', J: '', K: '#F92B17', L: '#2E5DCB', M: '#2E5DCB', N: '#63C318', O: '', P: '#FAFA15', Q: '#63C318',
      R: '#F92B17', S: '#63C318', T: '#63C318', U: '', V: '#2E5DCB', W: '#2E5DCB', X: '', Y: '#15FADB', Z: ''}},
  {name: 'Taylor', colors: {
      A: '#88FA15', B: '', C: '#FAFA15', D: '#FA2D15', E: '#FA156F', F: '#15FAA0', G: '#FA8015', H: '#1526FA',
      I: '#31FA15', J: '', K: '#842C93', L: '#31FA15', M: '#31FA15', N: '#9F33B2', O: '', P: '#F6A135', Q: '#F635AA',
      R: '#4935F6', S: '#F68135', T: '#F69B35', U: '', V: '#F68135', W: '#35CAF6', X: '', Y: '#35F6EA', Z: ''}},
  {name: 'No Color', colors: {
      A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '',
      I: '', J: '', K: '', L: '', M: '', N: '', O: '', P: '', Q: '',
      R: '', S: '', T: '', U: '', V: '', W: '', X: '', Y: '', Z: ''}}
];


