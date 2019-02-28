package com.songs.service;

import com.songs.domain.Song;
import com.songs.repository.SongRepository;

public class SongServiceIml implements SongService {

    private SongRepository songRepository;

    public  SongServiceIml(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    @Override
    public Iterable<Song> list() {
        return this.songRepository.findAll();
    }
}
