import { useState } from 'react';
import Icons from '../Icons';
import FilterArray from '../FilterArray';
import CollapsibleInput from '../CollapsibleInput';
import Dropdown from '../Dropdown';
import { playlists, filters, secondaryFilters, sortDropdownOptions } from './helper';

import styles from './SideBar.module.css';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onClickLibrary = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={styles.sidebar + ' ' + (collapsed ? styles.collapsed : '')}>
      <div className={styles.section}>
        <div className={styles.option}>
          <Icons.HouseActive className={styles.icon} />
          {!collapsed && <p>Home</p>}
        </div>
        <div className={styles.option}>
          <Icons.Search className={styles.icon} />
          {!collapsed && <p>Search</p>}
        </div>
      </div>
      <div className={styles.section + ' ' + styles.library}>
        <div className={styles.header}>
          <div className={styles.option} onClick={onClickLibrary}>
            <Icons.LibraryActive className={styles.icon} />
            {!collapsed && <p>Your Library</p>}
          </div>
          {!collapsed && (
            <div className={styles.actions}>
              <div className={styles.action}>
                <Icons.Plus className={styles.icon} />
              </div>
              <div className={styles.action}>
                <Icons.Arrow className={styles.icon} />
              </div>
            </div>
          )}
        </div>
        {!collapsed && (
          <>
            <FilterArray filters={filters} secondaryFilters={secondaryFilters} />
            <div className={styles.searchContainer}>
              <CollapsibleInput placeholder="Search in Your Library" />
              <Dropdown options={sortDropdownOptions} title="Sort by" />
            </div>
          </>
        )}
        <div className={styles.playlists}>
          {playlists.map((playlist, index) => (
            <div className={styles.playlist} key={index}>
              <div className={styles.image}>
                <img src={playlist.image} alt="playlist cover" />
              </div>
              {!collapsed && (
                <div className={styles.info}>
                  <div className={styles.name}>{playlist.name}</div>
                  <div className={styles.details}>
                    {playlist.type} • {playlist.detail}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
