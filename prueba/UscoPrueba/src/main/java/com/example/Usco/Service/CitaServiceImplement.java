/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Usco.Service;

import com.example.Usco.Dao.CitaDao;
import com.example.Usco.Model.Cita;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Helman
 */
@Service
public class CitaServiceImplement implements CitaService{
    @Autowired
    private CitaDao citadao;
    @Override
    @Transactional(readOnly=true)
    public List<Cita> findAll(){
        return (List<Cita>) citadao.findAll();
    }
    @Override
     @Transactional(readOnly=false)
    public Cita save(Cita cita){
        return citadao.save(cita);
    }
    @Override
     @Transactional(readOnly=true)
    public Cita findById(Integer id){
        return citadao.findById(id).orElse(null);
    }
}