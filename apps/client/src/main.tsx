import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from './App';
import 'antd/dist/antd.css';

const queryClient = new QueryClient();

ReactDOM.render(
  // <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  // </StrictMode>,
  document.getElementById('root')
);
