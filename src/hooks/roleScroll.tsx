import { useState, useEffect } from 'react';

const roles = [
  'Software Developer',
  'Full Stack Developer',
  'Network Engineer',
  'Security Analyst',
  'Data Analyst',
];

export default function useRoleScroll() {

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
            setIndex(i => (i + 1) % roles.length);
            setVisible(true);
        }, 400);
        }, 2500);

        return () => clearInterval(interval);
    }, [])

    return { role: roles[index], visible};
}