package com.kgfsl.forum;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.kgfsl.forum.Event;
import com.kgfsl.forum.EventRepository;
import com.kgfsl.forum.EventService;

@Service("eventService")
public class EventServiceImp implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public List<Event> getAll() {
        // TODO Auto-generated method stub
        return eventRepository.findAll();
    }

    @Override
    public Event save(Event event) {
        // TODO Auto-generated method stub
        return eventRepository.saveAndFlush(event);

    }

    @Override
    public Event find(long id) {
        // TODO Auto-generated method stub
        return eventRepository.findOne(id);
    }

    @Override
    public void delete(Long id) {
        // TODO Auto-generated method stub
        eventRepository.delete(id);
    }

}