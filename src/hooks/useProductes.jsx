import { useEffect, useState } from "react";

const useProductes = () => {
    const [productes, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('producets.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            });
    }, [])
    return [productes, loading]
}

export default useProductes;