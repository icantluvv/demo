import { useEffect, useState, Children, cloneElement} from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Carousel.module.css';

export const Carousel = ({children}) => {
    const PAGE_WIDTH = 70;
    const [offset, setOffset] = useState(0);
    const [pages, setPages] = useState([]);

    const handleLeftClick = () => {
        console.log('handleLeftClick');

        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH

            console.log(newOffset)
            return Math.min(newOffset,0)
        })
    };

    const handleRightClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            console.log(newOffset)
            return Math.max(newOffset, maxOffset)
        })

    };

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}vw`,
                        maxWidth: `${PAGE_WIDTH}vw`
                    }
                });
            })
        );
    }, []);

    return (
        <div className={styles.main_container}>
            <div className={styles.window}>
                <div className={styles.firstblock} onClick={handleLeftClick}><FaChevronLeft className={styles.arrow}/></div>
                <div className={styles.allitems_container}
                style={{
                    transform: `translateX(${offset}vw)`,
                    transition: `1s`
                }}>{pages}</div>
                <div className={styles.secondblock} onClick={handleRightClick}><FaChevronRight className={styles.arrow}/></div>
            </div>
            
        </div>
    );
};
