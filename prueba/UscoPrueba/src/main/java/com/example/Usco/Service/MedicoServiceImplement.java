/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Usco.Service;

import com.example.Usco.Dao.MedicoDao;
import com.example.Usco.Model.Medico;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Helman
 */
@Service
public class MedicoServiceImplement implements MedicoService {
    @Autowired
    private MedicoDao medicodao;
    @Override
    @Transactional(readOnly=true)
    public List<Medico> findAll(){
        return (List<Medico>) medicodao.findAll();
    }
    @Override
     @Transactional(readOnly=false)
    public Medico save(Medico medico){
        return medicodao.save(medico);
    }
    @Override
     @Transactional(readOnly=true)
    public Medico findById(Integer id){
        return medicodao.findById(id).orElse(null);
    }
}
