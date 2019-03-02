package com.songs.service;

import com.songs.domain.Song;
import org.springframework.stereotype.Service;

@Service
public interface SongService {

    Iterable<Song> list();
}
