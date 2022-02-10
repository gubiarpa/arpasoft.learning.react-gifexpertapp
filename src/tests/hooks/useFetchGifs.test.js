import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook(() =>  useFetchGifs('One Punch'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    });
    
    test('Debe retornar un arreglo de imágenes y loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook(() =>  useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        
        expect(data.length).toEqual(10);
        expect(loading).toEqual(false);
    });

 }); 