/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Usco.Service;

import com.example.Usco.Dao.ConsultorioDao;
import com.example.Usco.Model.Consultorio;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Helman
 */
@Service
public class ConsultorioServiceImplement implements ConsultorioService{
    
    @Autowired
    private ConsultorioDao consultoriodao;
    @Override
    @Transactional(readOnly=true)
    public List<Consultorio> findAll(){
        return (List<Consultorio>) consultoriodao.findAll();
    }
    @Override
     @Transactional(readOnly=false)
    public Consultorio save(Consultorio consultorio){
        return consultoriodao.save(consultorio);
    }
    @Override
     @Transactional(readOnly=true)
    public Consultorio findById(Integer id){
        return consultoriodao.findById(id).orElse(null);
    }
}
