package com.songs.service;

import com.songs.domain.Song;

public interface SongService {

    Iterable<Song> list();
}
