package com.example.demo.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Item;
import com.example.demo.service.ItemService;

@Service("itemService")
public class ItemServiceImpl implements ItemService {

	private List<Item> items = new ArrayList<>(); 

	public ItemServiceImpl() {
		items.add(new Item(0, "React"));
		items.add(new Item(1, "VUE"));
		items.add(new Item(2, "Angular"));
	}

	@Override
	public List<Item> getItems() {
		return items;
	}

}
