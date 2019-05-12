import styles from '../styles/search.less';
import {texts} from '../constants';
import SearchIcon from '../../../static/search.svg';
import FilterIcon from '../../../static/chemistry-filter.svg';

const ListSearch = () => (
    <>
        <input className={styles.search__input} placeholder={texts.search}/>
        <SearchIcon className={styles.search__icon}/>
        <FilterIcon className={styles.search__filter}/>
    </>
)
export default ListSearch;
