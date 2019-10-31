import { useEffect, useState } from 'react';

export default function useThese(id) {
    const [these, setThese] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        const url = `http://localhost:3001/theses/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(({ these }) => {
                setThese(these);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [id]);

    return [these, isLoading];
}