package com.songs.controller;

import com.songs.domain.Song;
import com.songs.service.SongService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/songs")
public class SongsController {

    private SongService songService;

    public SongsController(SongService songService) {
        this.songService = songService;
    }

    @GetMapping( value = {"", "/"})
    public Iterable<Song> list() {

        return this.songService.list();
    }
}