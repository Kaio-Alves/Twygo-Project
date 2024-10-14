// App.test.tsx
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('App Component', () => {
  test('renders the home page by default', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/cursos disponíveis/i)).toBeInTheDocument();
  });

  test('adds a course', () => {
    renderWithRouter(<App />);
    
    fireEvent.click(screen.getByText(/cadastrar cursos/i));
    
    fireEvent.change(screen.getByPlaceholderText(/título/i), { target: { value: 'Curso Teste' } });
    fireEvent.change(screen.getByPlaceholderText(/data de término/i), { target: { value: '04/10/2024' } });
    fireEvent.change(screen.getByPlaceholderText(/autor/i), { target: { value: 'Autor Teste' } });

    fireEvent.click(screen.getByText(/adicionar curso/i));

    expect(screen.getByText(/curso teste/i)).toBeInTheDocument();
  });

  test('removes a course', () => {
    renderWithRouter(<App />);
    
    fireEvent.click(screen.getByText(/cadastrar cursos/i));
    fireEvent.change(screen.getByPlaceholderText(/título/i), { target: { value: 'Curso Teste' } });
    fireEvent.change(screen.getByPlaceholderText(/data de término/i), { target: { value:  '04/10/2024' } });
    fireEvent.change(screen.getByPlaceholderText(/autor/i), { target: { value: 'Autor Teste' } });
    fireEvent.click(screen.getByText(/adicionar curso/i));

    fireEvent.click(screen.getByText(/excluir/i));

    expect(screen.queryByText(/curso teste/i)).not.toBeInTheDocument();
  });
});
